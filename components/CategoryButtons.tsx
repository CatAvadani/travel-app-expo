import Colors from '@/constants/Colors';
import { destinationCategories } from '@/data/categories';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface CategoryButtonProps {
  onCategoryChange: (category: string) => void;
}

const CategoryButton = ({ onCategoryChange }: CategoryButtonProps) => {
  const scrollRef = useRef<ScrollView | null>(null);
  const itemRef = useRef<(React.ElementRef<typeof Pressable> | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index];
    setActiveIndex(index);

    selected?.measure((x, y, width, height, pageX, pageY) => {
      scrollRef.current?.scrollTo({ x: pageX, y: 0, animated: true });
    });

    onCategoryChange(destinationCategories[index].title);
  };

  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        contentContainerStyle={{
          gap: 10,
          paddingVertical: 10,
          marginBottom: 5,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {destinationCategories.map((category, index) => (
          <Pressable
            key={index}
            ref={(el) => (itemRef.current[index] = el)}
            onPress={() => {
              handleSelectCategory(index);
            }}
            style={
              activeIndex === index
                ? styles.categoryBtnActive
                : styles.categoryBtn
            }
          >
            <MaterialCommunityIcons
              name={category.iconName as any}
              size={20}
              color={Colors.primaryColor}
            />
            <Text style={styles.categoryBtnText}>{category.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.black,
  },
  categoryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    gap: 5,
    shadowOffset: { width: 1, height: 2 },
    elevation: 3,
    shadowRadius: 5,
  },
  categoryBtnText: {
    fontSize: 14,
    marginLeft: 5,
    color: Colors.black,
  },
  categoryBtnActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondaryColor,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    gap: 5,
    shadowOffset: { width: 1, height: 2 },
    elevation: 3,
    shadowRadius: 5,
  },
});
